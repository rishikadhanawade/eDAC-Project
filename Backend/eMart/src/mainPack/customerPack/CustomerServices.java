package mainPack.customerPack;

import java.util.List;

public interface CustomerServices {

	public List<Customer> getCustomers();
	public Customer getCustomer(int custId);	
	public void addCustomer(Customer c);
	public void delete(int custId);
	public void update(Customer c, int custId);
	public List<?> getCustomerDtl(int custId);

}
