package mainPack.productPack;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Transactional
@Service
public class ProductManagerImpl implements ProductManager
{
	@Autowired
	ProductRepository repository;

	@Override
	public void addProduct(Product p) {
		repository.save(p);
	}

	@Override
	@Transactional
	public List<?> getProducts() {
		
		return repository.findAll();
	}

	@Override
	public void delete(int pid) {
		repository.deleteChildConfigDetailById(pid);
		repository.deleteChildCartDetailById(pid);
		repository.deleteGrandChildOrderDetailById(pid);
		repository.deleteChildInvoiceMasterById(pid);
		repository.deleteById(pid);
	}

	@Override
	public void update(Product p,int pid) {
		repository.update(p.getProdName(),p.getCatmasterID(),p.getProdShortDesc(),p.getMrpPrice(),p.getQtyOfInventory(),p.getCardholdersPrice(),p.getPointsToBeRedm(),p.getProductImagePath(),p.getOfferId(),p.getQty(),pid);
		
	}

	@Override
	public Product getProduct(int pid) {
		return repository.findById(pid);
	}

	@Override
	public List<Product> getProduct() {
		return null;
	}

	@Override
	public List<?> SpecificBrandProd(int cid) {
		
		return repository.SpecificBrandProd(cid);
	}
@Override
	public List<?> prodInvoice() {
		
		return repository.prodInvoice();
	}

	@Override
	public int totalpts() {
		
		return repository.totalpts();
	}
}
