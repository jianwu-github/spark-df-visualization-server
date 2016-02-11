# Spark Dataframe Visualization Server

Spark Dataframe Visualization Server is a Play Framework based Server with Data Visualization Web UI based on Angular/Bootstrap/D3.js, it provides data exploration, analysis and Visualization for Spark SQL DataFrames. 

This repository has two projects:
- df-rest-server: a Scala/Play/Spark based RESTful Server exposing Spark SQL Query running against Spark DataFrames
- df-viz-webui: a Javascript Application Project building Web UI with npm, grunt and bower

You can build and run df-vis-webui project using npm/bower/grunt as:
```
$cd df-viz-server/df-viz-webui
$npm install
$bower install
$grunt
```

