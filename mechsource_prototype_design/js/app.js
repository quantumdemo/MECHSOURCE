// MECHSOURCE Prototype JavaScript Application Logic

function switchSearchTab(mode) {
  const modes = ['ymmt', 'vin', 'slang', 'ai', 'oem'];
  modes.forEach(m => {
    const panel = document.getElementById('panel-' + m);
    const tab = document.getElementById('tab-' + m);
    if(panel) panel.style.display = 'none';
    if(tab) tab.classList.remove('active');
  });

  const activePanel = document.getElementById('panel-' + mode);
  const activeTab = document.getElementById('tab-' + mode);
  if(activePanel) activePanel.style.display = 'block';
  if(activeTab) activeTab.classList.add('active');
}

function executeSearch(query) {
  const title = document.getElementById('results-title');
  const tag = document.getElementById('vehicle-tag');
  if(title) title.innerText = "Compatible Parts for: " + query;
  if(tag) tag.innerText = query;

  const resultsSection = document.getElementById('results-section');
  if(resultsSection) {
    resultsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function executeSlangSearch() {
  const queryInput = document.getElementById('inp-slang');
  const query = queryInput ? queryInput.value : "Toyota Corolla Brainbox";
  executeSearch(query + " → Engine Control Module (ECU)");
}

function simulateAIScan() {
  const resultBox = document.getElementById('ai-result-box');
  if(resultBox) {
    resultBox.style.display = 'flex';
  }
}

function addToCart(itemName, price, tier) {
  const cartName = document.getElementById('cart-item-name');
  const cartTier = document.getElementById('cart-item-tier');
  const cartPrice = document.getElementById('cart-item-price');
  const cartTotal = document.getElementById('cart-total-price');

  if(cartName) cartName.innerText = itemName;
  if(cartTier) cartTier.innerText = tier;
  if(cartPrice) cartPrice.innerText = "₦ " + Number(price).toLocaleString();
  if(cartTotal) cartTotal.innerText = "₦ " + Number(price).toLocaleString();

  const cartDrawer = document.getElementById('cart-drawer');
  if(cartDrawer) {
    cartDrawer.scrollIntoView({ behavior: 'smooth' });
  }
}

function triggerCheckout() {
  alert("Payment placed safely into MECHSOURCE Escrow! Funds held for 48-Hour Inspection. Courier dispatch initiated.");
}

function triggerSOS() {
  alert("24/7 Roadside Emergency Breakdown SOS Dispatched! GPS location locked in Lagos. Mobile tow truck dispatched.");
}

function triggerFleetModal() {
  alert("Virtual Garage Fleet Dashboard: 3 Vehicles Logged. Toyota Hilux (2018), Toyota Corolla (2010), Mack Commercial Truck (2015).");
}

function triggerRFQModal() {
  alert("Corporate B2B Procurement RFQ Builder Opened. Attach Local Purchase Order (LPO) document.");
}

function updateFXPrice(partNum) {
  let newPrice = prompt("Enter updated FX price in NGN for OEM part " + partNum + ":", "19500");
  if(newPrice) {
    alert("Dynamic price updated successfully to ₦ " + Number(newPrice).toLocaleString());
  }
}

function confirmFitment() {
  alert("Part Fitment Confirmed by Certified Mechanic! Escrow funds released to supplier.");
}

function approveRefund() {
  alert("Dispute Approved. Escrow funds refunded to Buyer.");
}

function approveMerchant() {
  alert("CAC Business Documents Approved. Merchant store verified.");
}
