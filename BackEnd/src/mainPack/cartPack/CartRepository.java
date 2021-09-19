package mainPack.cartPack;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Repository
@Transactional
public interface CartRepository extends JpaRepository<Cart,Integer>{

	Cart save(Cart c);
	List<Cart> findAll();
	void deleteById(int id);
	
	
	@Modifying
	@Query("update Cart c set c.custid = :custid, c.deliveryCharge= :deliveryCharge, c.qty=:qty, c.totalBill=:totalBill, c.totalDiscount=:totalDiscount, c.totalItemCost=:totalItemCost where c.cartID = :cartID")
	void update(@Param("custid") int custid,@Param("deliveryCharge") int deliveryCharge,@Param("qty") int qty,@Param("totalBill") int totalBill,@Param("totalDiscount") int totalDiscount ,@Param("totalItemCost") int totalItemCost,@Param("cartID") int cartID);
	Cart findById(int id);	
	
}

