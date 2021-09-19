package mainPack.invoicePack;


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
@RequestMapping("/Invoice")
@CrossOrigin("http://localhost:3000")
public class InvoiceController {

	@Autowired
	InvoiceManager manager;
	
	@GetMapping(value = "AllData",headers = "Accept=application/json")  
	 public String show()
	 {
		  return new Gson().toJson(manager.get());
	 }
	
	@GetMapping(value = "GetCustInvoiceData/{id}", headers = "Accept=application/json")  
	 public String GetCustInvoiceData(@PathVariable int id)
	 {
		 return new Gson().toJson(manager.GetCustInvoiceData(id));
	 }
	
	
	@GetMapping(value = "GetData/{id}", headers = "Accept=application/json")  
	 public Invoice get(@PathVariable int id)
	 {
		Invoice c=manager.get(id);
		return c;
	 }
	
	@DeleteMapping(value = "DeleteData/{id}", headers = "Accept=application/json")  
	 public void remove(@PathVariable int id)
	 {
		manager.delete(id);
	 }
	
	@PutMapping(value = "UpdateData/{id}",headers = "Accept=application/json")  
	 public void update(@RequestBody Invoice i,@PathVariable int id)
	 {
		manager.update(i,id);
	 }
	
	@PostMapping(value = "AddData", headers = "Accept=application/json")  
	 public void add(@RequestBody Invoice i)
	 {
		manager.add(i);
	 }
}
