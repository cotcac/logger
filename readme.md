# Write log file

## Libraris
- Winston to write logs to file
- Morgan to get logs from all express request

# Idea
- Use Winston to write all log to file. 5MB for file and maxinum 5 files.
- Use Morgan to get all request from client the use that info for winston write file.

```
{"message":"Http server listining on port 3000","level":"info","timestamp":"2019-08-12T09:25:38.997Z"}
{"message":"Http server listining on port 3000","level":"info","timestamp":"2019-08-12T09:27:37.608Z"}
{"message":"GET / 304 - - 8.304 ms\n","level":"info","timestamp":"2019-08-12T10:01:00.907Z"}
{"message":"GET / 304 - - 0.915 ms\n","level":"info","timestamp":"2019-08-12T10:01:01.766Z"}
{"message":"GET / 304 - - 0.562 ms\n","level":"info","timestamp":"2019-08-12T10:01:09.230Z"}
{"message":"GET / 304 - - 0.408 ms\n","level":"info","timestamp":"2019-08-12T10:01:09.966Z"}
{"message":"GET / 304 - - 0.391 ms\n","level":"info","timestamp":"2019-08-12T10:14:44.732Z"}

```

# Run

```
nodemon .
```