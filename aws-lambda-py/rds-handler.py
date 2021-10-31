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
    AWS_RDS_ENDPOINT, user=AWS_RDS_USERNAME, passwd=AWS_RDS_PASSWORD, db=AWS_RDS_DATABASENAME)

# The handler function takes a couple of arguments : event & context


def awsLambdaHandler(event, context):
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM t_transaction')

    # This returns arrays
    rows = cursor.fetchall()

    # Format the array
    for row in rows:
        print("{0} {1} {2}".format(row[0], row[1], row[2]))
