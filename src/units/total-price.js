export const totalPrice = arr => {
	return arr.reduce((a, c) => a + c.cost * c.quantity, 0);
};