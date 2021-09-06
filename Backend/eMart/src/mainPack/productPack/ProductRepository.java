package mainPack.productPack;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product,Integer> 
{
	Product save(Product p);
	List<Product> findAll();
	void deleteById(int pid);
	
	
	@Modifying
	@Query("update Product p set p.prodName = :prodName,p.catmasterID = :catmasterID,p.prodShortDesc = :prodShortDesc, p.mrpPrice=:mrpPrice, p.qtyOfInventory=:qtyOfInventory,p.cardholdersPrice=:cardholdersPrice, p.pointsToBeRedm=:pointsToBeRedm, p.productImagePath=:productImagePath,p.offerId=:offerId,p.qty=:qty where p.prodID = :prodID ")
	void update( @Param("prodName")String prodName,@Param("catmasterID")int catmasterID,@Param("prodShortDesc") String prodShortDesc,@Param("mrpPrice") int mrpPrice,@Param("qtyOfInventory") int qtyOfInventory,@Param("cardholdersPrice") int cardholdersPrice,@Param("pointsToBeRedm") int pointsToBeRedm, @Param("productImagePath") String productImagePath,@Param("offerId") int offerId,@Param("prodID") int prodID,@Param("qty") int qty);
	
	Product findById(int pid);
	
	@Modifying
	@Query("delete from Cart c where c.productID= :pid")
	void deleteChildCartDetailById(@Param("pid")int pid);
	
	@Modifying
	@Query("delete from Config_details c where c.product_id = :pid")
	void deleteChildConfigDetailById(@Param("pid")int pid);
	
	
	@Modifying
	@Query("delete from OrderDtl o where o.invoiceOrderID in(select invoiceOrderID from Invoice i where i.productID= :pid)")
	void deleteGrandChildOrderDetailById(@Param("pid")int pid);
	
	@Modifying
	@Query("delete from Invoice i where i.productID= :pid")
	void deleteChildInvoiceMasterById(@Param("pid")int pid);
	
	@Query("select p from Product p where p.catmasterID = :catmasterID")
	List<Product> SpecificBrandProd(@Param("catmasterID")int catmasterID);

@Query("select p from Product p inner join Invoice i on p.prodID=i.productID")
	List<Product> prodInvoice();
	
	//select * from product p inner join invoice i on p.prodID=i.productID;
	
	
	@Query("select sum(p.pointsToBeRedm) from Product p inner join Invoice i on p.prodID=i.productID")
	int totalpts();
}
