package mainPack.categoryPack;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface CategoryRepository extends JpaRepository<Category,Integer> 
{
	Category save(Category c);
	List<Category> findAll();
	void deleteById(int cid);
	
	@Query("select "+ " new mainPack.categoryPack.DistinctCat(c.catmasterID, c.categoryName , c.catImagePath) "+" from Category c group by c.categoryName")
	List<Category> findDistinctCat();
	
	@Query("select "+ " new mainPack.categoryPack.DistinctCat(c.catmasterID , c.subCat , c.catImagePath) "+" from Category c where c.categoryName = :categoryName group by c.subCat")
	List<Category> findDistinctsubCat(@Param("categoryName") String categoryName);
	
	@Query("Select "+" new mainPack.categoryPack.DistinctCat(c.catmasterID , c.subCatProduct , c.catImagePath) "+" from Category c where c.subCat = :subcat")
	List<Category> subCatPro(@Param("subcat") String subcat);
	
	@Modifying
	@Query("update Category c set c.categoryName = :categoryName, c.catImagePath = :catImagePath, c.subCat = :subCat, c.subCatName=:subCatName, c.subCatProduct=:subCatProduct where c.catmasterID = :catmasterID")
	void update(@Param("categoryName") String categoryName,@Param("catImagePath") String catImagePath,@Param("subCat") String subCat,@Param("subCatName") String subCatName,@Param("subCatProduct") String subCatProduct,@Param("catmasterID")int catmasterID);
	
	Category findById(int cid);
	
	@Modifying
	@Query("delete from Product p where p.catmasterID = :catmasterID")
	void deleteChildProductById(@Param("catmasterID")int catmasterID);
	
	@Modifying
	@Query("delete from Cart c where c.productID in(select p.prodID from Product p join Category ca on p.catmasterID = ca.catmasterID where p.catmasterID= :catmasterID)")
	void deleteChildCartDetailById(@Param("catmasterID")int catmasterID);
	
	@Modifying
	@Query("delete from Config_details c where c.product_id in(select p.prodID from Product p join Category ca on p.catmasterID = ca.catmasterID where p.catmasterID= :catmasterID)")
	void deleteChildConfigDetailById(@Param("catmasterID")int catmasterID);
	
	
	@Modifying
	@Query("delete from OrderDtl o where o.invoiceOrderID in(select invoiceOrderID from Invoice i where productID in(select prodID from Product p where p.catmasterID= :catmasterID))")
	void deleteGrandChildOrderDetailById(@Param("catmasterID")int catmasterID);
	
	@Modifying
	@Query("delete from Invoice i where productID in(select prodID from Product p where p.catmasterID= :catmasterID)")
	void deleteChildInvoiceMasterById(@Param("catmasterID")int catmasterID);
}
