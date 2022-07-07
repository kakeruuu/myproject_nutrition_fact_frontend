from setting import session
from models.user import User

def create_user():
    user = User()
    user.name = "次郎"
    session.add(user)
    session.commit()

    print(session.query(User).all())

    session.close()