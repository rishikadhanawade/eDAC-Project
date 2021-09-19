package mainPack.productPack;


import java.util.List;

public interface ProductManager
{
	void addProduct(Product p);
	public List<?> getProducts();
	void delete(int pid);
	void update(Product Product,int pid);
	Product getProduct(int pid);
	List<?> getProduct();
	public List<?> SpecificBrandProd(int cid);
	public List<?> prodInvoice();
	int totalpts();
}
