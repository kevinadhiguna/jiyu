ide = ["netbeans", "vscode", "sublime_text"]
companies = ["oracle", "microsoft", "sublime_hq"]

# Join those mentioned lists into one
ide_and_companies = ide + companies

print("IDE and Companies (a joined list) : {}".format(ide_and_companies)) 
# ['netbeans', 'vscode', 'sublime_text', 'oracle', 'microsoft', 'sublime_hq']
