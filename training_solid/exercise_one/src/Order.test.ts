import Beer from "./Beer";
import Item from "./Item";
import MessageDataFile from "./MessageDataFile";
import Order from "./Order";
import Water from "./Water";
import Whisky from "./Whisky";

test("Deve criar um pedido e calcular o total", function () {
  //given
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10));
  order.addItem(new Whisky("Jack Daniels", 100));
  order.addItem(new Water("Cristal", 1));

  //when
  const total = order.getTotal();

  //then
  expect(total).toBe(111);
});

test("Deve criar um pedido e calcular os impostos", function () {
  //given
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10)); //10% de taxa
  order.addItem(new Whisky("Jack Daniels", 100)); //20% de taxa
  order.addItem(new Water("Cristal", 1)); //isenta de taxa

  //when
  const taxes = order.getTaxes();

  //then
  expect(taxes).toBe(21);
});

test("Deve criar um pedido e imprimir uma mensagem em portugues", async function () {
  //given
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10));
  order.addItem(new Whisky("Jack Daniels", 100));
  order.addItem(new Water("Cristal", 1));

  //when
  const message = await order.printMessage("pt");

  //then
  expect(message).toBe(
    "O total foi de R$111. Os impostos foram R$21. Obrigado pelo seu pedido!"
  );
});

test("Deve criar um pedido e imprimir uma mensagem em inglês", async function () {
  //given
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10));
  order.addItem(new Whisky("Jack Daniels", 100));
  order.addItem(new Water("Cristal", 1));

  //when
  const message = await order.printMessage("en");

  //then
  expect(message).toBe(
    "The total was R$111. The taxes was R$21. Thanks for your order!"
  );
});
