package mainPack.customerPack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController  
@RequestMapping("/Customer")
@CrossOrigin("http://localhost:3000")
public class CustomerController
{
	@Autowired
	CustomerServices manager;
	
	@GetMapping(value = "AllCustomers",headers = "Accept=application/json")  
	 public String showCustomers()
	 {
		  return new Gson().toJson(manager.getCustomers());
	 }
	@GetMapping(value = "GetCustomer/{cid}", headers = "Accept=application/json")  
	 public Customer getCustomer(@PathVariable int cid)
	 {
		Customer c=manager.getCustomer(cid);
		return c;
	 }
	@DeleteMapping(value = "DeleteCustomer/{cid}", headers = "Accept=application/json")  
	 public void removeCustomer(@PathVariable int cid)
	 {
		manager.delete(cid);
	 }
	@PutMapping(value = "UpdateCustomer/{cid}",headers = "Accept=application/json")  
	 public void updateCustomer(@RequestBody Customer customer,@PathVariable int cid)
	 {
		manager.update(customer,cid);
	 }
	@PostMapping(value = "AddCustomer", headers = "Accept=application/json")  
	 public void addCat(@RequestBody Customer customer)
	 {
		manager.addCustomer(customer);
	 }
	@GetMapping(value = "GetCustomerDetail/{cid}", headers = "Accept=application/json")  
	 public String getCustomerDtl(@PathVariable int cid)
	 {
		 return new Gson().toJson(manager.getCustomerDtl(cid));
	 }
}
