package mainPack.orderDetailPack;

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
@RequestMapping("/OrderDetail")
@CrossOrigin("http://localhost:3000")
public class OrderDtlController {

	@Autowired
	OrderDtlManager manager;
	
	@GetMapping(value = "AllData",headers = "Accept=application/json")  
	 public String show()
	 {
		  return new Gson().toJson(manager.get());
	 }
	@GetMapping(value = "GetData/{id}", headers = "Accept=application/json")  
	 public OrderDtl get(@PathVariable int id)
	 {
		OrderDtl c=manager.get(id);
		return c;
	 }
	@DeleteMapping(value = "DeleteData/{id}", headers = "Accept=application/json")  
	 public void removeCategory(@PathVariable int id)
	 {
		manager.delete(id);
	 }
	@PutMapping(value = "UpdateData/{id}",headers = "Accept=application/json")  
	 public void updateCategory(@RequestBody OrderDtl od,@PathVariable int id)
	 {
		manager.update(od,id);
	 }
	@PostMapping(value = "AddData", headers = "Accept=application/json")  
	 public void addCat(@RequestBody OrderDtl od)
	 {
		manager.add(od);
	 }
}
