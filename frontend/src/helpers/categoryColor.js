exports.addColor = (data) => {
    var categoryClass = 'badge ';
  switch (data) {
    case 'mockups':
      categoryClass += 'badge-primary';
      break;
    case 'websites':
      categoryClass += 'badge-success';
      break;
    case 'icons':
      categoryClass += 'badge-dark';
      break;
    case 'misc':
      categoryClass += 'badge-danger';
      break;
    case 'plugins':
      categoryClass += 'badge-warning';
      break;
    case 'mobile':
      categoryClass += 'badge-info';
      break;
    case 'ui-kits':
      categoryClass += 'badge-light';
      break;
    case 'desktop':
      categoryClass += 'badge-secondary';
      break;
  }
  return categoryClass;
}
