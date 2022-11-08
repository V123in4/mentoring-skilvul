INSERT INTO orders
  ( id, user_id, transaction_time, total_price )
VALUES
  (98, 1, '2022-11-01 18:09:00', 7500);

INSERT INTO orders_items
  ( order_id, product_id, category_id, quantity, price )
VALUES
  (98, 77, 2, 3, 6000);

INSERT INTO orders_items
  ( order_id, product_id, category_id, quantity, price )
VALUES
  (98, 70, 1, 1, 1500);

INSERT INTO orders_items
  ( order_id, product_id, category_id, quantity, price )
VALUES
  (98, 65, 3, 2, 2400);
