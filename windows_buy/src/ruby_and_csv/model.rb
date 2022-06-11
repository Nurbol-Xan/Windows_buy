def create(user_info)
    query = <<-REQUEST
        INSERT INTO #{$tablename} (firstname, lastname, age, password, email) VALUES (
            "#{user_info[:firstname]}", 
            "#{user_info[:lastname]}", 
            "#{user_info[:age]}", 
            "#{user_info[:password]}", 
            "#{user_info[:email]}");
    REQUEST

    ConnectionSqlite.new.execute(query)    
end

def _run_insert_
    File.open("windows.csv", 'a') do |val|
        val.puts @insert_attribut.values.join(',')
    end 
end

def initialize
    @insert_attribut  = {}
end