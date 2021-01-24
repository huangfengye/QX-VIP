/var obj = JSON.parse($response.body); 
obj['restored'] = 1;
$done({body: JSON.stringify(obj)});