FROM php:8-apache

WORKDIR /var/www/html/

COPY . .

EXPOSE 80

#dando permissão <user>/<user_group>
RUN chown -R www-data:www-data /var/www