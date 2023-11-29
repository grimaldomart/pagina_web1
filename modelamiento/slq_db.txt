
-- Table `sakila`.`CATEGORIAS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS`CATEGORIAS` (
  `idCATEGORIAS` INT NOT NULL,
  `NOMBRE` VARCHAR(45) NULL,
  PRIMARY KEY (`idCATEGORIAS`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sakila`.`PRODUCTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PRODUCTOS` (
  `id` INT NOT NULL,
  `NOMBRE` VARCHAR(45) NULL,
  `DESCRIPCION` VARCHAR(45) NULL,
  `FOTO` VARCHAR(45) NULL,
  `STOKC` INT(10) NULL,
  `PRECIO` DOUBLE NULL,
  `CATEGORIAS_idCATEGORIAS` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sakila`.`CLIENTES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CLIENTES` (
  `id` INT NOT NULL,
  `rasonsocial` VARCHAR(45) NULL,
  `documento` VARCHAR(45) NULL,
  `celular` VARCHAR(45) NULL,
  `direccion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sakila`.`VENDEDORES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VENDEDORES` (
  `id` INT NOT NULL,
  `nombres` VARCHAR(45) NULL,
  `apellidos` VARCHAR(45) NULL,
  `DNI` VARCHAR(45) NULL,
  `celular` VARCHAR(45) NULL,
  `direccion` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `fecnac` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sakila`.`COMPROBANTE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `COMPROBANTE` (
  `id` INT NOT NULL,
  `numero` VARCHAR(45) NULL,
  `fecha` DATE NULL,
  `subtotal` DOUBLE NULL,
  `IGV` DOUBLE NULL,
  `totalnum` DOUBLE NULL,
  `CLIENTES_id` INT NOT NULL,
  `VENDEDORES_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sakila`.`DETALLET`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DETALLET` (
  `id` INT NOT NULL,
  `cantidad` INT(10) NULL,
  `precio` DOUBLE NULL,
  `importe` DOUBLE NULL,
  `COMPROBANTE_id` INT NOT NULL,
  `PRODUCTOS_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
