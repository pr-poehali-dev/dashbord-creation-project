import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get real-time dashboard analytics from database
    Args: event - dict with httpMethod, queryStringParameters
          context - object with attributes: request_id, function_name
    Returns: HTTP response with analytics data
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    cur.execute('SELECT active_users, revenue, conversion_rate, new_requests, stat_date FROM dashboard_stats ORDER BY created_at DESC LIMIT 1')
    stats_row = cur.fetchone()
    
    cur.execute('SELECT month_name, activity_value FROM monthly_activity ORDER BY month_order ASC')
    activity_rows = cur.fetchall()
    
    cur.execute('SELECT system_name, load_percentage FROM system_activity ORDER BY id ASC')
    system_rows = cur.fetchall()
    
    cur.close()
    conn.close()
    
    result = {
        'stats': {
            'active_users': stats_row[0],
            'revenue': float(stats_row[1]),
            'conversion_rate': float(stats_row[2]),
            'new_requests': stats_row[3],
            'stat_date': stats_row[4].isoformat()
        },
        'monthly_activity': [
            {'month': row[0], 'value': row[1]} for row in activity_rows
        ],
        'system_activity': [
            {'name': row[0], 'value': row[1]} for row in system_rows
        ]
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(result),
        'isBase64Encoded': False
    }
