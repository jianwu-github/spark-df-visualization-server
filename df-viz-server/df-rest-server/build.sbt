name := "spark-df-rest-server"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.10.5"

javacOptions ++= Seq("-source", "1.7", "-target", "1.7") 

scalacOptions ++= List(
  "-unchecked",
  "-deprecation",
  "-language:_",
  "-target:jvm-1.7",
  "-encoding", "UTF-8"
)

net.virtualvoid.sbt.graph.Plugin.graphSettings

// additional libraries
libraryDependencies ++= Seq(
  "org.apache.spark" %% "spark-core" % "1.5.2",
  "org.apache.spark" %% "spark-sql" % "1.5.2",
  "org.apache.spark" %% "spark-mllib" % "1.5.2",
  "com.typesafe.akka" %% "akka-actor" % "2.3.9",
  "com.typesafe.akka" %% "akka-remote" % "2.3.9",
  "com.typesafe.play" % "play-json_2.10" % "2.3.7",
  "com.typesafe.play" % "play-ws_2.10" % "2.3.7",
  "com.fasterxml.jackson.core" % "jackson-databind" % "2.4.4",
  "com.fasterxml.jackson.module" % "jackson-module-scala_2.10" % "2.4.4",
  "org.slf4j" % "slf4j-api" % "1.7.5",
  "org.slf4j" % "slf4j-log4j12" % "1.7.5",
  "log4j" % "log4j" % "1.2.17",
  "joda-time" % "joda-time" % "2.7",
  "org.joda" % "joda-convert" % "1.2",
  "com.github.nscala-time" %% "nscala-time" % "2.0.0",
  "de.jollyday" % "jollyday" % "0.4.8",
  "org.scalatest" %% "scalatest" % "2.2.1" % "test",
  "junit" % "junit" % "4.10" % "test"
)

resolvers ++= Seq(
  "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/",
  "Second Typesafe repo" at "http://repo.typesafe.com/typesafe/maven-releases/",
  "scala-tools" at "https://oss.sonatype.org/content/groups/scala-tools",
  Resolver.sonatypeRepo("public")
)
