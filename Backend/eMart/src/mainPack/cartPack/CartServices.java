package mainPack.cartPack;

import java.util.List;

public interface CartServices {

	public List<Cart> getAll();
	public Cart get(int orderid);	
	public void add(Cart c);
	public void delete(int orderid);
	public void update(Cart c, int orderid);

}
