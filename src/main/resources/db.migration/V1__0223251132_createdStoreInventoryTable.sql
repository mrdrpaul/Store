CREATE TABLE store_inventory
(
    id                  BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
    product_name        VARCHAR(255),
    onhand_quantity     INTEGER,
    product_description VARCHAR(255),
    CONSTRAINT pk_store_inventory PRIMARY KEY (id)
);