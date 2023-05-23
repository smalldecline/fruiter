var orderTableDom = document.getElementById('order-table')

var orderList = JSON.parse(localStorage.getItem('orderList'))

orderTableDom.innerHTML = ''

orderList.forEach((order) => {
  orderTableDom.innerHTML += `<tr>	
	<td>${order.id}</td>
	<td>${order.name}</td>
	<td>${order.count}</td>
	<td>${order.price}</td>
	<td>${order.time}</td>
	<td>${order.address}</td>
</tr>`
})
