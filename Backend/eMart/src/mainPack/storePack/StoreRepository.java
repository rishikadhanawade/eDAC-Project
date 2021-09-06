package mainPack.storePack;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface StoreRepository extends JpaRepository<Store, Integer> {
	Store save(Store s);

	List<Store> findAll();

	void deleteById(int sid);

	@Modifying
	@Query("update Store s set s.storeAddr = :storeAddr, s.storePhn=:storePhn where s.storeID = :storeID")
	void update(@Param("storeAddr") String storeAddr, @Param("storePhn") long storePhn, @Param("storeID") int storeID);

	Store findById(int sid);
}
