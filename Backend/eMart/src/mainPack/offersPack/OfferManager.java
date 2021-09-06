package mainPack.offersPack;

import java.util.List;

public interface OfferManager {
	void addOffer(Offer o);

	List<Offer> getOffers();

	void delete(int oid);

	void update(Offer offer, int oid);

	Offer getOffer(int oid);
}
