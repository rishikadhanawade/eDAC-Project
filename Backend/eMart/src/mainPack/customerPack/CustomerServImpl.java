package mainPack.customerPack;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServImpl implements CustomerServices {
	
	@Autowired
	CustomerRepository repository;
	
	
	@Override
	public void addCustomer(Customer c) {
		repository.save(c);
	}

	@Override
	public List<Customer> getCustomers() {
		return repository.findAll();
	}

	@Override
	public void delete(int cid) {
		repository.updateChildInvoiceById(cid);
		repository.deleteChildCartById(cid);
		repository.deleteById(cid);
	}

	@Override
	public void update(Customer c,int cid) {
		
			repository.update(c.getCust_Name(), c.getCust_PhoneNo(), c.getCust_Address(), c.getCust_Email_ID(), cid);
	}

	@Override
	public Customer getCustomer(int cid) {
		return repository.findById(cid);
	}
	
	@Override
	public List<?> getCustomerDtl(int cid) {
		return repository.getOrderDtl(cid);
	}
}
