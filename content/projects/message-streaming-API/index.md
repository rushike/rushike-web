---
title: "Message Streaming API"
tags: ["java", "freemarker", "oracle-sql"]
personal: false
date: "2021-03-01"
---

I worked on Deutsche Bank internal message streaming project between March 2021 - Aug 2021.

It was spring boot API with REST End Points with streaming service involved. Main task was to stream & transform messages from XML to json. Messages were fetch from MQ queues and process and transformed to Kafka topics. 

For transformation apache freemarker was used, which converted xml payload to respective json outputs.

Apart from it recon, scheduling services were implemented to track and resend lost messages.