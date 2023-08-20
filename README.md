# Nginx


```NGINX``` is open-source web server software used for reverse proxy, load balancing, and caching. It provides HTTPS server capabilities and is
mainly designed for maximum performance and stability. It also functions as a proxy server for email communications protocols, such as
IMAP, POP3, and SMTP.

## why Nginx?

NGINX is a powerful web server software used by several hosting companies. It was designed to handle a high volume of requests simultaneously.
Therefore, it offers faster loading times and better performance than most other web servers.
Additionally, NGINX uses fewer resources and hardware than other server software.

## pl

The NGINX source code is written in the C programming language by Kernighan and Ritchie and maintains a consistent style.

## configurations

Every NGINX configuration file will be found in the ```/etc/nginx/``` directory, with the main configuration file located in ```/etc/nginx/nginx.conf```.
NGINX configuration options are known as “directives”: these are arranged into groups, known interchangeably as blocks or contexts.

```conf
user       www www;  ## Default: nobody
worker_processes  5;  ## Default: 1
error_log  logs/error.log;
pid        logs/nginx.pid;
worker_rlimit_nofile 8192;

events {
  worker_connections  4096;  ## Default: 1024
}

http {
  include    conf/mime.types;
  include    /etc/nginx/proxy.conf;
  include    /etc/nginx/fastcgi.conf;
  index    index.html index.htm index.php;

  default_type application/octet-stream;
  log_format   main '$remote_addr - $remote_user [$time_local]  $status '
    '"$request" $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"';
  access_log   logs/access.log  main;
  sendfile     on;
  tcp_nopush   on;
  server_names_hash_bucket_size 128; # this seems to be required for some vhosts

  server { # php/fastcgi
    listen       80;
    server_name  domain1.com www.domain1.com;
    access_log   logs/domain1.access.log  main;
    root         html;

    location ~ \.php$ {
      fastcgi_pass   127.0.0.1:1025;
    }
  }

  server { # simple reverse-proxy
    listen       80;
    server_name  domain2.com www.domain2.com;
    access_log   logs/domain2.access.log  main;

    # serve static files
    location ~ ^/(images|javascript|js|css|flash|media|static)/  {
      root    /var/www/virtual/big.server.com/htdocs;
      expires 30d;
    }

    # pass requests for dynamic content to rails/turbogears/zope, et al
    location / {
      proxy_pass      http://127.0.0.1:8080;
    }
  }

  upstream big_server_com {
    server 127.0.0.3:8000 weight=5;
    server 127.0.0.3:8001 weight=5;
    server 192.168.0.1:8000;
    server 192.168.0.1:8001;
  }

  server { # simple load balancing
    listen          80;
    server_name     big.server.com;
    access_log      logs/big.server.access.log main;

    location / {
      proxy_pass      http://big_server_com;
    }
  }
}
```

### architecture

![nginx architecture](https://cdn-media-1.freecodecamp.org/images/RooSvbKlAWsOjkz8JPactXH-GPf4Pe6DC3Ue)

## resources

- [www.nginx.com](https://www.nginx.com/)
- [www.nginx.com/docs](https://nginx.org/en/docs/)
- [www.nginx.com/resources/examples](https://www.nginx.com/resources/wiki/start/topics/examples/full/)
- [www.nginx.com/docs/beginners](http://nginx.org/en/docs/beginners_guide.html)
