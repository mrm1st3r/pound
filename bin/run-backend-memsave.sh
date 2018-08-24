#!/bin/bash

java -jar -Xms32M -Xmx64M -Xss1M -Dspring.profiles.active=memsave ../assembly/target/assembly-0.0.1-SNAPSHOT.jar
