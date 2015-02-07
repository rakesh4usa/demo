function _productResourceConetxtUri() {
  var href = location.href;
  var pos = href.indexOf('://');
  if ((pos > -1) && (pos + 3 < href.length)) {
    pos =  href.indexOf('/', pos + 3);
  } else {
    pos = -1;
  }
  if ((pos > -1) && (pos + 1 < href.length)) {
    pos =  href.indexOf('/', pos + 1);
  } else {
    pos = -1;
  }
  if (pos > -1) {
    href =  href.substring(0, pos);
  }
  return href;
}
function _productResourceString(value) {
  if (!value || (value === null)) {
    return '';
  }
  return value.toString().replace(/\"/g, '\\"');
}
function _productResourceFloat(value) {
  if (!value || (value === null)) {
    return 0;
  }
  try {
    return parseFloat(value.toString());
  } catch (e) {
  }
  return 0;
}
function productResourceList(callbackFunction) {
  if (!jQuery || (jQuery === null) || !callbackFunction || (typeof(callbackFunction) !== 'function')) {
    return;
  }
  var ajaxResults = null;
  jQuery.ajax({
    type: 'GET',
    url: _productResourceConetxtUri() + '/resource/product',
    cache: false,
    dataType: 'json'
  }).success(function(data) {
    ajaxResults = data;
  }).done(function() {
    callbackFunction(ajaxResults);
  });
}
function productResourceGet(productId, callbackFunction) {
  if (!jQuery || (jQuery === null) || !productId || (productId === null) || !callbackFunction || (typeof(callbackFunction) !== 'function')) {
    return;
  }
  var id = 0;
  try {
    id = parseInt(productId);
  } catch (e) {
    id = 0;
  }
  if (id <= 0) {
    return;
  }
  var ajaxResults = null;
  jQuery.ajax({
    type: 'GET',
    url: _productResourceConetxtUri() + '/resource/product/' + id,
    cache: false,
    dataType: 'json'
  }).success(function(data) {
    ajaxResults = data;
  }).done(function() {
    callbackFunction(ajaxResults);
  });
}
function productResourceDelete(productId, callbackFunction) {
  if (!jQuery || (jQuery === null) || !productId || (productId === null)) {
    return;
  }
  var id = 0;
  try {
    id = parseInt(productId);
  } catch (e) {
    id = 0;
  }
  if (id <= 0) {
    return;
  }
  var ajaxResults = null;
  jQuery.ajax({
    type: 'DELETE',
    url: _productResourceConetxtUri() + '/resource/product/' + id,
    cache: false,
    dataType: 'json'
  }).success(function(data) {
    ajaxResults = data;
  }).done(function() {
    if (callbackFunction && (typeof(callbackFunction) === 'function')) {
      callbackFunction(ajaxResults);
    }
  });
}
function productResourcePost(productId, productCode, productDescription, productColor, productCost, productQuantity, callbackFunction) {
  if (!jQuery || (jQuery === null) || (typeof(productId) === 'undefined') || (productId === null)) {
    return;
  }
  var id = 0;
  try {
    id = parseInt(productId);
  } catch (e) {
    id = 0;
  }
  var ajaxResults = null;
  jQuery.ajax({
    type: 'POST',
    url: _productResourceConetxtUri() + '/resource/product',
    cache: false,
    processData: false,
    contentType: 'application/json',
    dataType: 'json',
    data: '{"id":' + id
      + ',"code":"' + _productResourceString(productCode) + '"'
      + ',"description":"' + _productResourceString(productDescription) + '"'
      + ',"color":"' + _productResourceString(productColor) + '"'
      + ',"cost":' + _productResourceFloat(productCost)
      + ',"quantity":' + _productResourceFloat(productQuantity)
      + '}'
  }).success(function(data) {
    ajaxResults = data;
  }).done(function() {
    if (callbackFunction && (typeof(callbackFunction) === 'function')) {
      callbackFunction(ajaxResults);
    }
  });
}