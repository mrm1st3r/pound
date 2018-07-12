[![Build Status](https://travis-ci.org/mrm1st3r/pound.svg?branch=master)](https://travis-ci.org/mrm1st3r/pound)
 [![Known Vulnerabilities](https://snyk.io/test/github/mrm1st3r/pound/badge.svg?targetFile=pom.xml)](https://snyk.io/test/github/mrm1st3r/pound?targetFile=pom.xml)
 [![codecov](https://codecov.io/gh/mrm1st3r/pound/branch/master/graph/badge.svg)](https://codecov.io/gh/mrm1st3r/pound)
 [![sonarcube](https://sonarcloud.io/api/project_badges/measure?project=com.ltaake.pound%3Apound-parent&metric=alert_status)](https://sonarcloud.io/dashboard?id=com.ltaake.pound%3Apound-parent)
# Pound

> A minimal user interface for asterisk

Pound operates in a readonly mode on the database that asterisk writes it's CDR records to.
It is not able to do any modifications to asterisk configuration (and is not planned to be).

## Features

- [X] View Call History via REST-API
- [ ] View Call History in UI
- [ ] Notification on Missed Calls
- [ ] Call Statistics

## Modules
Following a quick overview of the project modules,
what they're doing and how they are connected with each other: 

- **api**  
  The REST interface definition, using swagger.

- **backend-rest**  
  Generated sources for the backend, based on the *api* module.

- **backend**  
  The spring boot based backend application, depending on the *backend-rest* module for it's interface.

- **frontend**  
  The angular based frontend application, depending on the *api* module for communication with the backend.

- **assembly**  
  The main module used to start the application. Contains the spring boot main class and depends on *backend* and *frontend*.

