# Mobweb homework, dormitory registry

# API - Preparations:
 - Download Docker Desktop (or just the daemon for Linux) from the following link: https://www.docker.com/get-started/ 
- Starting: - Once the Docker daemon is installed and running, open a command prompt in the current (/project_name/rest) directory (on Windows, clear everything from the file manager search bar and type "cmd") 
- Once the command prompt opens, enter the following command:  
    ```docker-compose up``` - Wait a bit while the Docker daemon builds and starts the appropriate containers, after which the API should be running. Now, launch your Android application and start using it!

# Troubleshooting and solutions: 
- It may happen that the API cannot start due to a port conflict. In this case, stop the application already using the port.<br> ```netstat -nao | findstr 3000``` on Windows helps identify what's using the port. You can stop it manually by opening an administrator command prompt and running ```TASKKILL /F /PID <process id>``` 
- Sometimes the "db" container starts, but the "api" container does not. The API will only start if the database (db) container starts within a fixed time frame, so on slower machines, the database may take longer to start than the API can wait. In this case, manually start the API container using the command ```docker start api```. To verify that the database container is running, enter ```docker ps```, and if you see the "db" container, you're good to go. 
- Another issue may arise where the API works fine, and the Android app is trying to access it at the correct URL, but it still doesn't work. On Windows, this is often due to the Windows Defender Firewall blocking the requests, as they are not established or related TCP requests. The solution could be temporarily disabling the Windows Defender Firewall or creating a new firewall rule to allow the requests through. https://www.milesweb.in/hosting-faqs/add-ip-address-windows-firewall/