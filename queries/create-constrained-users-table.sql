CREATE TABLE Users (
  create_date   date not null,
  user_handle   uuid not null primary key,
  last_name     text,
  first_name    text not null
);