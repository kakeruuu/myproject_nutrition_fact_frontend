from setting import session
from user import User

user = User()
user.name = "次郎"
session.add(user)
session.commit()

print(session.query(User).all())

session.close()