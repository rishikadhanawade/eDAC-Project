package mainPack.orderDetailPack;

import java.util.List;
import java.util.Date;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface OrderDtlRepository extends JpaRepository<OrderDtl,Integer>{

	OrderDtl save(OrderDtl c);
	List<OrderDtl> findAll();
	void deleteById(int id);
	@Modifying
	@Query("update OrderDtl o set o.invoiceOrderID=:invoiceOrderID, o.deliveryDate = :deliveryDate, o.orderDate = :orderDate, o.otherShippingAddr=:otherShippingAddr where o.orderDtlID = :orderDtlID")
	void update(@Param("invoiceOrderID") int invoiceOrderID,@Param("deliveryDate") Date deliveryDate,@Param("orderDate") Date orderDate,@Param("otherShippingAddr") String otherShippingAddr,@Param("orderDtlID") int orderDtlID );
	OrderDtl findById(int id);
}