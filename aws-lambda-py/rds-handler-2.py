### Notes ###
# - Install pymysql (pip install pymysql)
#
# - After writing the code, zip it and upload the zip file to AWS Lambda
#   - MacOS/Linux-based OS : zip -r lambda_function.zip ${PWD}
#   - Windows : in File Manager (GUI), right click this folder and zip it.
#
# - Also, you need a permission in AWS IAM (related to AWS Lambda): AWSLambdaVPCAccessExecutionRole

import os
import pymysql

# Define AWS RDS configuration
AWS_RDS_ENDPOINT = os.environ['AWS_RDS_ENDPOINT']
AWS_RDS_USERNAME = os.environ['AWS_RDS_USERNAME']
AWS_RDS_PASSWORD = os.environ['AWS_RDS_PASSWORD']
AWS_RDS_DATABASENAME = os.environ['AWS_RDS_DATABASENAME']

# Connect to AWS RDS (You are not recommended to put this in the awsRdsHandler function as it will establish the connection each time the function is executed)
aws_rds_connection = pymysql.connect(
    host=AWS_RDS_ENDPOINT, user=AWS_RDS_USERNAME, password=AWS_RDS_PASSWORD, db=AWS_RDS_DATABASENAME)

# The handler function takes a couple of arguments : event & context
def awsLambdaHandler(event, context):
    cursor = aws_rds_connection.cursor()
    
    # Fetch area
    print("Total Area :", cursor.execute('SELECT * FROM t_area'))

    # This returns arrays
    rows = cursor.fetchall()

    # Format the array
    for i in rows:
        print(i)
    
    # Closing the cursor
    print("Closing cursor...")
    cursor.close()

    # Closing the connection
    print("Closing the connection to AWS RDS, thank you...")
    aws_rds_connection.close()
