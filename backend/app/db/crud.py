from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from sqlalchemy import text

from . import models, schemas
# from app.core.security import get_password_hash


# def get_user(db: Session, user_id: int):
#     user = db.query(models.User).filter(models.User.id == user_id).first()
#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")
#     return user
#
#
# def get_user_by_email(db: Session, email: str) -> schemas.UserBase:
#     return db.query(models.User).filter(models.User.email == email).first()


# def get_users(
#     db: Session, skip: int = 0, limit: int = 100
# ) -> t.List[schemas.UserOut]:
#     return db.query(models.User).offset(skip).limit(limit).all()

#
# def create_user(db: Session, user: schemas.UserCreate):
#     hashed_password = get_password_hash(user.password)
#     db_user = models.User(
#         first_name=user.first_name,
#         last_name=user.last_name,
#         email=user.email,
#         is_active=user.is_active,
#         is_superuser=user.is_superuser,
#         hashed_password=hashed_password,
#     )
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user


# def delete_user(db: Session, user_id: int):
#     user = get_user(db, user_id)
#     if not user:
#         raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
#     db.delete(user)
#     db.commit()
#     return user


# def edit_user(
#     db: Session, user_id: int, user: schemas.UserEdit
# ) -> schemas.User:
#     db_user = get_user(db, user_id)
#     if not db_user:
#         raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
#     update_data = user.dict(exclude_unset=True)
#
#     if "password" in update_data:
#         update_data["hashed_password"] = get_password_hash(user.password)
#         del update_data["password"]
#
#     for key, value in update_data.items():
#         setattr(db_user, key, value)
#
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user


def get_collections(
    db: Session, skip: int = 0, limit: int = 20
) -> t.List[schemas.Collection]:
    return db.query(models.Collection).where(models.Collection.status == 1).order_by(text("weight desc, id desc")).offset(skip).limit(limit).all()


def get_collection_detail(
        db: Session, collection_id: int
) -> schemas.Collection:
    return db.query(models.Collection).where(models.Collection.id == collection_id).first()


def get_collection_prices(
        db: Session,
        collection_id: int,
        start_time: int,
        end_time: int
) -> t.List[schemas.CollectionPrice]:

    # return db.query(models.CollectionPrice).\
    #     where(models.CollectionPrice.collection_id == collection_id).\
    #     where(models.CollectionPrice.data_time.between(start_time, end_time)).order_by(models.CollectionPrice.data_time.asc()).all()
    sql = """
            select 
                max(id) as id, date(from_unixtime(data_time/1000)) as dt, min(price) as price 
            from collection_price 
            where collection_id = :collection_id and data_time between :start_time and :end_time
            group by dt
        """
    stmt = text(sql)
    res = db.query(models.CollectionPrice).\
        from_statement(stmt).params(collection_id=collection_id, start_time=start_time, end_time=end_time).all()
    return res
