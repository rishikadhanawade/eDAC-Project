package mainPack.categoryPack;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CategoryManagerImpl implements CategoryManager
{
	@Autowired
	CategoryRepository repository;
	
	
	@Override
	public void addCategory(Category c) {
		repository.save(c);
	}

	@Override
	public List<Category> getCategories() {
		return repository.findAll();
	}

	@Override
	public void delete(int cid) {
		repository.deleteGrandChildOrderDetailById(cid);
		repository.deleteChildInvoiceMasterById(cid);
		repository.deleteChildCartDetailById(cid);
		repository.deleteChildConfigDetailById(cid);
		repository.deleteChildProductById(cid);
		repository.deleteById(cid);
	}

	@Override
	public void update(Category c,int cid) {
		repository.update(c.getCategoryName(),c.getCatImagePath(),c.getSubCat(),c.getSubCatName(),c.getSubCatProduct(),cid);
		
	}

	@Override
	public Category getCategory(int cid) {
		return repository.findById(cid);
	}

	@Override
	public List<Category> findDistinctCat() {
		
		return repository.findDistinctCat();
	}

	@Override
	public List<Category> findDistinctsubCat(String name) {
		
		return repository.findDistinctsubCat(name);
	}

	@Override
	public List<Category> subCatPro(String nme) {
		return repository.subCatPro(nme);
	}
}
