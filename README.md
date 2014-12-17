cityfund
========

This is a django aplication built for Python 2.7.5


Manifest list of dependencies
------
  argparse (1.2.1) - installed automatically
  
  Django (1.7.1)
  
  django-crispy-forms (1.4.0)
  
  pip (1.5.6) - installed automatically
  
  postgres (2.1.2)
  
  psycopg2 (2.5.4)
  
  setuptools (3.6) - installed automatically
  
  wsgiref (0.1.2) - installed automatically
  

HOW to install and run the web app
------
- make a virtual env (suggest naming it cityfund)

- activate virtual env (in virtual env dir, source bin/activate)

- check to see if python is correct version

- pip install the dependencies above that are not automatic in the order they appear in the list

- create directory to house project from github (suggest to create in home or your user account)

- clone the repository into the directory https://github.com/PdxCodeGuild/cityfund

- cd into cityfund/city_fund (using ls you would see manage.py)

- create database to house data tables (in command line follow below)
     - $ sudo su - postgres
     - $ createdb cityfund
     - $ createuser student
     - $ psql cityfund
     - $ alter user student with password 'codeguild';
     

- establish models as tables in database ($python manage.py makemigrations followed by $python manage.py migrate)
    
- run server to view site and admin ($python manage.py runserver)

- open internet browser and go to  http://localhost:8000/


