package mainPack.offersPack;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface OfferRepository extends JpaRepository<Offer, Integer> {
	Offer save(Offer o);

	List<Offer> findAll();

	void deleteById(int oid);

	@Modifying
	@Query("update Offer o set o.offerPercent=:offerPercent where o.offerID = :offerID")
	void update(@Param("offerPercent") int offerPercent,@Param("offerID") int offerID);

	Offer findById(int oid);
	
	//Keeping offerId=1 as 0% discount i.e. offerId=1 acts as default discount offered as zero
	@Modifying
	@Query("update Product p set offerId=1,offerPrice=mrpPrice where p.offerId = :offerID")
	void updateChildProductById(@Param("offerID") int offerID);
	
	
	@Modifying
	@Query("update Product p set p.offerPrice=(((100-(:offerPercent))/100)*p.mrpPrice) where p.offerId= :offerID")
	void updateChildProductById_OfferPrice(@Param("offerPercent") int offerPercent,@Param("offerID") int offerID);
	
}
