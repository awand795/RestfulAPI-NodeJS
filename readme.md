# ClassRoom API

ClassRoom API is create with Node JS (Express), and using nosql Database (MongoDB).
How to install.
First clone this git repository, after clone run npm install in your terminal to install all dependecies : 

$ npm install

and to run this script write npm start on your terminal : 

$ npm run start

the script will running on port 3000

### Documentation

To get token key your must sign up on : http://localhost:3000/

Base Url : http://localhost:3000/

##### Class Schedule API Documentation

Endpoint : /api/v1/class/

###### Http Request Method Get

Description : The function of method GET on endpoint /api/v1/class is for showing all class schedule on database.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|
| id	    | *optional  | you can show class schedule from the id of class	    |
| nameClass | *optional  | you can search class from name of class		        |

example : http://localhost:3000/api/v1/class?key_token=your_token_key (For getting all class schedule)
or : http://localhost:3000/api/v1/class?key_token=your_token_key&id=class_id (For getting specific schedule from id class)
or : http://localhost:3000/api/v1/class?key_token=your_token_key&nameClass=class_name (For getting specific schedule with the name of class)

###### Http Request Method POST

Description : The function of method POST on endpoint /api/v1/class is for inserting new class schedule to database.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|

Body Request : 

| Body	    |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| nameClass | *required  | Class schedule name					                |
| date      | *required  | Date from class schedule				                |
| timeStart | *required	 | start time of class  				                |
| timeEnd   | *required	 | end time of class				                    |      

example : http://localhost:3000/api/v1/class?key_token=your_token_key
the data will send with body request with post method, or you can check on video for detailed example

###### Http Request Method PUT

Description : The function of method put on endpoint /api/v1/class is for updating or change the mistake or something in class schedule.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|

Body Request : 

| Body	    |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| nameClass | *optional  | Class schedule name					                |
| date      | *optional  | Date from class schedule				                |
| timeStart | *optional	 | start time of class					                |
| timeEnd   | *optional	 | end time of class				                    |      

example : http://localhost:3000/api/v1/class?key_token=your_token_key
the data will send with body request with post method, or you can check on video for detailed example

###### Http Request Method DELETE

Description : The function of method delete on endpoint /api/v1/class is for deleting class schedule where is you don't want it again.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|
| id        | *required  | the id of class schedule                         	|

example : http://localhost:3000/api/v1/class?key_token=your_token_key&id=class_id





##### Absen API Documentation

Endpoint : /api/v1/absen

###### Http Request Method Get

Description : The function of method GET on endpoint /api/v1/absen is for showing all or specific absen on database.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|
| id	    | *optional  | you can show class schedule from the id of class	    |
| nameClass	| *optional  | you can search class from name of class		        |
| Date  	| *optional  | you can search class from name of class		        |

example : http://localhost:3000/api/v1/absen?key_token=your_token_key (For getting all absen)
or : http://localhost:3000/api/v1/absen?key_token=your_token_key&id=class_id (For getting specific absen from id absen)
or : http://localhost:3000/api/v1/absen?key_token=your_token_key&nameClass=class_name&date=schedule_date (For getting specific absen with the name of class and date schedule, FYI if you using these option always use nameClass and date both if not it will response error)

###### Http Request Method POST

Description : The function of method POST on endpoint /api/v1/absen is for inserting new absen to database.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|

Body Request : 

| Body	    |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
|nameStudent| *required  | Name Of student on absen				                |
| date      | *required  | Date where is he/she absen			                |
| nameClass | *required	 | the name of class he/she present		                |
| absen     | *required	 | Note : like(present,sick,alpha,excuse                |    
|description| *required	 | the description like(he can't come cause he sick)    |        

example : http://localhost:3000/api/v1/absen?key_token=your_token_key
the data will send with body request with post method, or you can check on video for detailed example

###### Http Request Method PUT

Description : The function of method put on endpoint /api/v1/absen is for updating or change the mistake or something in absen.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|

Body Request : 

| Body	    |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
|nameStudent| *optional  | Name Of student on absen				                |
| date      | *optional  | Date where is he/she absen			                |
| nameClass | *optional	 | the name of class he/she present		                |
| absen     | *optional	 | Note : like(present,sick,alpha,excuse                |    
|description| *optional	 | the description like(he can't come cause he sick)    |        

example : http://localhost:3000/api/v1/absen?key_token=your_token_key
the data will send with body request with post method, or you can check on video for detailed example

###### Http Request Method DELETE

Description : The function of method delete on endpoint /api/v1/absen is for deleting absen where is you don't want it again.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|
| id        | *required  | the id from absen                                 	|

example : http://localhost:3000/api/v1/absen?key_token=your_token_key&id=absen_id





##### Material Sharing API Documentation

Endpoint : api/v1/materialSharing

###### Http Request Method Get

Description : The function of method delete on endpoint /api/v1/materialSharing is for showing or getting specific file info and file path in directory.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|
| id        | *optional  | the id from file in database                        	|

example : http://localhost:3000/api/v1/materialSharing?key_token=your_token_key (This is for getting all data of file)
Or : http://localhost:3000/api/v1/absen?key_token=your_token_key&id=file_id (For getting specific file with the id of file).

###### Http Request Method Post

Description : The function of method delete on endpoint /api/v1/materialSharing is for showing or inserting file into path directory and file info (like : name of file,path,mimetype,etc) will saved in database.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|

Body Request With Form-data enctype

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| file      | *required  | the file you want to upload                      	|

example : http://localhost:3000/api/v1/materialSharing?key_token=your_token_key and the data will send with body request enctype form-data. you will see the detailed information on video

###### Http Request Method DELETE

Description : The function of method delete on endpoint /api/v1/materialSharing is for deleting file where is you don't want it again.

| Parameter |  Required  | Description 						                    |
|-----------| :--------: |------------------------------------------------------|  
| key_token | *required  | key token is 64 digit key when you get on register	|
| id        | *required  | the id from file                                 	|

example : http://localhost:3000/api/v1/absen?key_token=your_token_key&id=file_id

##### Database Integration Documentation

Description : Database using local database using mongodb://localhost:27017, and using database awanda, the awanda db have 4 collections :
1. Absen : for saved absen data,
2. Schedule : for saved class schedule data,
3. token  : for saved and checking user token where is want to use api,
4. file : for save file info only, the file saved on folder directory on storageDisk not on database. why? cause it will slowed the database.

and use mongoose schema you can check it on models folder

Absen collection have 5 field : 
1. NameStudent (the name of student)
2. date (date absen)
3. nameClass (class name he is)
4. absen (absen type)
5. description (the descriptions)

Schedule Collection have 4 field :
1. nameClass (name of class)
2. date (date schedule)
3. timeStart (start time of class schedule)
4. timeEnd (the end of time class schedule)

File collection have 5 field : 
1. originalName (origin file name)
2. fileName (filename in folder)
3. path (file location to download)
4. size (size of file)
5. mimetype (the file type)

Token collection have 3 field : 
1. name (name registered user)
2. email (email registered user for accessing key)
3. token (The key token)