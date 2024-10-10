const form = document.querySelector('form[name="order-info"]')

function updatePizzaForm() {
  form.r_name.value = form.realname.value || 'None!'
  form.r_email.value = form.email.value || 'None!'
  form.r_address.value = form.address.value || 'None!'
  form.r_pizza.value = form.pizza_type.value || 'None!'
  form.r_size.value = form.size.value || 'None!'

  form.r_addons.value = Array.from(form.addons.values())
    .map(e => e.checked ? e.value : '')
    .filter(Boolean)
    .join(', ') || 'None!'
}

form.addEventListener("input", updatePizzaForm);
updatePizzaForm()