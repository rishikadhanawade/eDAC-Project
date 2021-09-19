package mainPack.categoryPack;

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
@RequestMapping("/Category")
@CrossOrigin("http://localhost:3000")
public class CategoryController
{
	@Autowired
	CategoryManager manager;
	

	//1st gives all main categories	
	@GetMapping(value = "DistinctCategories",headers = "Accept=application/json")  
	 public String DistinctCategories()
	 {
		  return new Gson().toJson(manager.findDistinctCat());
	 }
	
	//2nd gives all sub categories of a main category
	@GetMapping(value = "DistinctsubCategories/{name}",headers = "Accept=application/json")  
	 public String DistinctsubCategories(@PathVariable String name)
	 {
		  return new Gson().toJson(manager.findDistinctsubCat(name));
	 }
	
	//3rd returns the subcategory you send
	@GetMapping(value = "subCatPro/{nme}",headers = "Accept=application/json")  
	 public String subCatPro(@PathVariable String nme)
	 {
		  return new Gson().toJson(manager.subCatPro(nme));
	 }
	
	//Gives all the categories
	@GetMapping(value = "AllCategories",headers = "Accept=application/json")  
	 public String showCategories()
	 {
		  return new Gson().toJson(manager.getCategories());
	 }
	//Gives the category you send
	@GetMapping(value = "GetCategory/{cid}", headers = "Accept=application/json")  
	 public Category getCategory(@PathVariable int cid)
	 {
		Category c=manager.getCategory(cid);
		return c;
	 }
	//Delete by ID
	@DeleteMapping(value = "DeleteCategory/{cid}", headers = "Accept=application/json")  
	 public void removeCategory(@PathVariable int cid)
	 {
		manager.delete(cid);
	 }
	@PutMapping(value = "UpdateCategory/{cid}",headers = "Accept=application/json")  
	 public void updateCategory(@RequestBody Category category,@PathVariable int cid)
	 {
		manager.update(category,cid);
	 }
	@PostMapping(value = "AddCategory", headers = "Accept=application/json")  
	 public void addCat(@RequestBody Category category)
	 {
		manager.addCategory(category);
	 }
}
