const delStudent=require('../middlewares/studentMw/delStudent.js');
const getStudent=require('../middlewares/studentMw/getStudent.js');
const getAllRooms = require('../middlewares/roomMw/getAllRooms.js')
const modStudent=require('../middlewares/studentMw/modStudent.js');
const delRoom=require('../middlewares/roomMw/delRoom.js');
const modRoom=require('../middlewares/roomMw/modRoom.js');
const validRoom=require('../middlewares/validationMw/validRoomMw.js');
const validStudent=require('../middlewares/validationMw/validStudentMw.js');
const addRoom=require('../middlewares/roomMw/addRoom.js');
const getAllStudentOfRoom=require('../middlewares/studentMw/getAllStudentOfRoom');
const getRoomById=require('../middlewares/roomMw/getRoomById.js');
const studModRoom=require('../middlewares/roomMw/modStudent')
const deleteStudFromRoom=require('../middlewares/roomMw/deleteStudFromRoom');
const getAllStud = require('../middlewares/studentMw/getAllStudents')
const studentModel=require('../entities/student');
const roomModel=require('../entities/room');
const makeAdmin = require('../middlewares/studentMw/makeAdminMw')
const login = require ('../middlewares/authMw/loginMw')
const auth = require('../middlewares/authMw/authInit')
const admin = require('../middlewares/authMw/isAdmin')
const register = require('../middlewares/authMw/registerMw')
const logout = require('../middlewares/authMw/logoutMw')
const getByName = require('../middlewares/studentMw/getStudents')
const adminCheck = require('../middlewares/authMw/adminCheck')
const byRnum = require('../middlewares/roomMw/getRoomByNum')
module.exports=function(app){
    const objectRepo={
        student: studentModel,
        room: roomModel
    };
    
    app.post('/register',validStudent(objectRepo),register(objectRepo))
    app.post('/login',login(objectRepo))
    app.post('/logout',logout())
    app.get('/is_admin',adminCheck(objectRepo))
    app.use(auth(objectRepo))
    app.get('/hallgatok/nept',getByName(objectRepo))
    app.get('/hallgatok/hallgato/:hId',getStudent(objectRepo),(req,res,next)=>{return res.json(res.locals.hallgato)})
    app.post('/admin/make/:hId',admin(objectRepo),makeAdmin(objectRepo))
    app.get('/hallgatok/room/:rID',getAllStudentOfRoom(objectRepo));
    app.get('/hallgatok/list',getAllStud(objectRepo));
    app.get('/admin/hallgatok_mod/:hId/del',admin(),delStudent(objectRepo));
    app.post('/admin/hallgatok_mod/:hId',admin(),getStudent(objectRepo),validStudent(objectRepo),modStudent(objectRepo));
    app.get('/szobak/one/',byRnum(objectRepo))
    app.get('/szobak/all',getAllRooms(objectRepo))
    app.get('/szobak/list/:rId',getRoomById(objectRepo),getAllStudentOfRoom(objectRepo));
    app.post('/admin/hallgato_add_to_room/:rId',getRoomById(objectRepo),studModRoom(objectRepo));
    app.post('/admin/szobak_mod/add',admin(),validRoom(objectRepo),addRoom(objectRepo));
    app.get('/admin/delete_stud_from_room/:hId',admin(),getStudent(objectRepo),deleteStudFromRoom(objectRepo));
    app.post('/admin/szobak_mod/:rId',admin(),getRoomById(objectRepo),validRoom(objectRepo),modRoom(objectRepo));
    app.get('/admin/szobak_mod/:rId/del',admin(),getRoomById(objectRepo),delRoom(objectRepo));
}
