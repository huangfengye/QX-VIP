/var obj = JSON.parse($response.body); 
obj['restored'] = true;
$done({body: JSON.stringify(obj)});