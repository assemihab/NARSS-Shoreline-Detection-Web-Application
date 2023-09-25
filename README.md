# NARSS-Shoreline-Detection-Web-Application
 in this project we will detect the shoreline in the user specified area through web application

 First, you need to activate the backend. You'll require the Conda package installer to install the dependencies of the environment, all of which are listed in the requirements file in the backend folder.

Right now, the only implemented function is 'dimg.' This function is used to download images from GEE (Google Earth Engine) using the open-source 'coastsat' repository, specifically by modifying a script called 'SDS.download.

paraphrased text on how to install the dependencies of coastsat:
"
To run the toolbox you first need to install the required Python packages in an environment. To do this we will use **Anaconda**, which can be downloaded freely [here](https://www.anaconda.com/download/). If you are a more advanced user and have **Mamba** installed, use Mamba as it will install everything faster and without problems.

Once you have it installed on your PC, open the Anaconda prompt (in Mac and Linux, open a terminal window) and use the `cd` command (change directory) to go the folder where you have downloaded this repository.

Create a new environment named `coastsat` with all the required packages by entering these commands in succession:

```
conda create -n coastsat
conda activate coastsat
conda install -c conda-forge geopandas earthengine-api scikit-image matplotlib astropy notebook -y
pip install pyqt5
```
"
after activating coastsat venv 

write this command

    pip install Django==4.2.5

cd to go to the "backend" directory

then write thie command to activate the server

    py manage.py runserver

to activate the frontend open cmd on the "frontend" directory then write this command after install node.js

    npm start
    

![image](https://github.com/assemihab/NARSS-Shoreline-Detection-Web-Application/assets/87605812/17fc9893-2003-4b08-8935-4e7ddb7a21a6)

![image](https://github.com/assemihab/NARSS-Shoreline-Detection-Web-Application/assets/87605812/b48d28fe-e952-4e9c-9fd8-53cdffb27e5d)

![image](https://github.com/assemihab/NARSS-Shoreline-Detection-Web-Application/assets/87605812/52d48577-f87b-4853-9156-9636d7a3d592)

![image](https://github.com/assemihab/NARSS-Shoreline-Detection-Web-Application/assets/87605812/c145f3be-f415-4d0a-8c51-9f3ce725da7b)

![image](https://github.com/assemihab/NARSS-Shoreline-Detection-Web-Application/assets/87605812/7bbc0a44-ea70-46c2-a57d-ccbae28eab50)













 
 


