Task Api
# Install the command line client
$ pip install coreapi-cli
task
list
GET /task/api/v1/task/
# Load the schema document
$ coreapi get http://127.0.0.1:8000/task/docs/

# Interact with the API endpoint
$ coreapi action task list
create
POST /task/api/v1/task/
Request Body
The request body should be a "application/json" encoded object, containing the following items.

Parameter	Description
title required	
description	
done	
# Load the schema document
$ coreapi get http://127.0.0.1:8000/task/docs/

# Interact with the API endpoint
$ coreapi action task create -p title=... -p description=... -p done=...
read
GET /task/api/v1/task/{id}/
Path Parameters
The following parameters should be included in the URL path.

Parameter	Description
id required	A unique integer value identifying this task.
# Load the schema document
$ coreapi get http://127.0.0.1:8000/task/docs/

# Interact with the API endpoint
$ coreapi action task read -p id=...
update
PUT /task/api/v1/task/{id}/
Path Parameters
The following parameters should be included in the URL path.

Parameter	Description
id required	A unique integer value identifying this task.
Request Body
The request body should be a "application/json" encoded object, containing the following items.

Parameter	Description
title required	
description	
done	
# Load the schema document
$ coreapi get http://127.0.0.1:8000/task/docs/

# Interact with the API endpoint
$ coreapi action task update -p id=... -p title=... -p description=... -p done=...
partial_update
PATCH /task/api/v1/task/{id}/
Path Parameters
The following parameters should be included in the URL path.

Parameter	Description
id required	A unique integer value identifying this task.
Request Body
The request body should be a "application/json" encoded object, containing the following items.

Parameter	Description
title	
description	
done	
# Load the schema document
$ coreapi get http://127.0.0.1:8000/task/docs/

# Interact with the API endpoint
$ coreapi action task partial_update -p id=... -p title=... -p description=... -p done=...
delete
DELETE /task/api/v1/task/{id}/
Path Parameters
The following parameters should be included in the URL path.

Parameter	Description
id required	A unique integer value identifying this task.
# Load the schema document
$ coreapi get http://127.0.0.1:8000/task/docs/

# Interact with the API endpoint
$ coreapi action task delete -p id=...
