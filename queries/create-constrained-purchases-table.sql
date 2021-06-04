CREATE TABLE Purchases (
  date          date not null,
  user_handle   uuid references Users (user_handle),
  sku           uuid not null,
  quantity      int not null
);